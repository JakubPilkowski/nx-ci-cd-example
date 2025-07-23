---
'@nx-ci-cd-example/nx-ci-cd-example': patch
'@nx-ci-cd-example/second-app': patch
---

# Include Root Package in Version Management

This version plan adds the root package to the version management system.

## Changes Made

- **Enhanced nx.json**: Added root package to release groups
- **Root Package Versioning**: Configured root package.json for version management
- **Unified Release Process**: Root package now participates in releases

## Features Added

- Root package version tracking
- Root package changelog generation
- Unified release workflow for all packages
- Consistent versioning across workspace

## Impact

This enhancement will:

- Version the root package.json along with apps
- Generate changelog for the root package
- Maintain consistency across the entire workspace
- Provide better project documentation
