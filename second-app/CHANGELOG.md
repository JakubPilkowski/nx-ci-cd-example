## 0.0.4 (2025-07-23)

### 🩹 Fixes

- # Add GitHub Changelog Management ([714ef0d](https://github.com/JakubPilkowski/nx-ci-cd-example/commit/714ef0d))

  This version plan adds GitHub changelog management capabilities to the Nx release configuration.
  ## Changes Made
  - **Enhanced nx.json**: Added comprehensive GitHub release configuration
  - **Git Integration**: Configured automatic git operations (push, tag, commit)
  - **Release Automation**: Set up automatic GitHub releases with changelog generation
  ## Features Added
  - Automatic GitHub release creation
  - Enhanced changelog rendering options
  - Git tag and commit automation
  - Improved release workflow integration
  ## Impact
  This enhancement will:
  - Automatically create GitHub releases when versions are bumped
  - Generate detailed changelog entries with commit references
  - Streamline the release process with automated git operations
  - Improve project documentation and release tracking

## 0.0.3 (2025-07-23)

### 🩹 Fixes

- # Version Plan - Patch Bump for Both Applications ([66d0c32](https://github.com/JakubPilkowski/nx-ci-cd-example/commit/66d0c32))

  This version plan bumps both the main application and second application with patch versions.
  ## Changes Made
  - **@nx-ci-cd-example/nx-ci-cd-example**: Patch version bump for development iteration
  - **@nx-ci-cd-example/second-app**: Patch version bump for development iteration
  Both applications are being updated to maintain consistency across the monorepo while following independent versioning strategy.
  ## Impact
  This patch bump will:
  - Update version numbers in package.json files
  - Generate appropriate changelog entries
  - Maintain semantic versioning compliance
  - Skip publishing (as configured in nx.json)

### ❤️ Thank You

- JakubPilkowski @JakubPilkowski