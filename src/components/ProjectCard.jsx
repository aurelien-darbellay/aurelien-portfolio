import React from "react";

function isValidUrl(url) {
  return typeof url === "string" && /^https?:\/\//i.test(url);
}

export default function ProjectCard({ project }) {
  const handleClick = () => {
    if (isValidUrl(project.deployUrl)) {
      window.open(project.deployUrl, "_blank", "noopener,noreferrer");
    }
  };

  // Normalize GitHub links:
  // - Preferred: project.github = { front?: string, back?: string }
  // - Legacy fallback: project.githubUrl (string)
  const ghFront = project?.github?.front;
  const ghBack = project?.github?.back;
  const legacy = project?.githubUrl;

  const hasFront = isValidUrl(ghFront);
  const hasBack = isValidUrl(ghBack);
  const hasLegacy = isValidUrl(legacy);

  const renderGitButtons = () => {
    // Two buttons when both front and back exist
    if (hasFront && hasBack) {
      return (
        <>
          <a
            className="icon-link"
            href={ghFront}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label={`${project.title} GitHub Frontend`}
          >
            <GitHubIcon /> GitHub Front
          </a>
          <a
            className="icon-link"
            href={ghBack}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label={`${project.title} GitHub Backend`}
          >
            <GitHubIcon /> GitHub Back
          </a>
        </>
      );
    }

    // Single button when only one exists (front OR back OR legacy)
    const singleUrl = hasFront
      ? ghFront
      : hasBack
      ? ghBack
      : hasLegacy
      ? legacy
      : null;
    if (singleUrl) {
      return (
        <a
          className="icon-link"
          href={singleUrl}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          aria-label={`${project.title} GitHub repository`}
        >
          <GitHubIcon /> Git
        </a>
      );
    }

    // No GitHub link available
    return (
      <span
        className="icon-link"
        aria-hidden="true"
        title="Add github.front or github.back to enable"
      >
        <GitHubIcon /> No Repo
      </span>
    );
  };

  return (
    <article
      className="card"
      onClick={handleClick}
      role={isValidUrl(project.deployUrl) ? "button" : undefined}
      tabIndex={isValidUrl(project.deployUrl) ? 0 : -1}
      onKeyDown={(e) => {
        if (e.key === "Enter" && isValidUrl(project.deployUrl)) handleClick();
      }}
      aria-label={
        isValidUrl(project.deployUrl)
          ? `Open ${project.title} (deployed)`
          : project.title
      }
      title={
        isValidUrl(project.deployUrl)
          ? "Open deployed project"
          : "No deploy URL yet – edit src/data/projects.js"
      }
    >
      <div className="card-media">
        <img
          src={project.image}
          alt={project.title + " preview"}
          loading="lazy"
        />
      </div>
      <div className="card-body">
        <h3>{project.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: project.description }}></p>

        <div className="badges">
          {project.tech.map((t) => (
            <span key={t} className="badge">
              {t}
            </span>
          ))}
        </div>
        <div className="card-actions">
          {/* GitHub actions (front/back/single) */}
          <div className="card-git-buttons">{renderGitButtons()}</div>

          {/* Live status */}
          {isValidUrl(project.deployUrl) ? (
            <div className="icon-link" aria-hidden="true">
              ↗︎ Live
            </div>
          ) : (
            <div className="icon-link" aria-hidden="true">
              Soon
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.41-1.35-1.79-1.35-1.79-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.26 1.86 1.26 1.08 1.86 2.83 1.32 3.52 1.01.11-.79.42-1.32.76-1.62-2.66-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.13-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.48 11.48 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.64.25 2.86.12 3.16.77.84 1.24 1.91 1.24 3.23 0 4.63-2.81 5.66-5.49 5.96.43.37.81 1.1.81 2.22v3.29c0 .31.21.69.82.58A12 12 0 0 0 12 .5Z"
      />
    </svg>
  );
}
