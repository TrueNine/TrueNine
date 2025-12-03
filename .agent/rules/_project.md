---
trigger: always_on
---

This file provides guidance for the `AI Agent` WHEN working on the TrueNine project. TrueNine is `[[companions/TrueNine|赵日天]]`'s personal GitHub Profile project, built with `[[frameworks/Jekyll|Jekyll]]` and deployed on `[[platforms/github.com|GitHub Pages]]`, showcasing personal technical stack, project experience, and open source contributions, while emphasizing the importance of accessibility technology and open source spirit.

## [STEP-0] Project Positioning

TrueNine as a personal branding platform has the following core values:

- **Personal Brand Showcase**: Professional GitHub Profile demonstrating full-stack development capabilities
- **Accessibility Technology Promotion**: Providing role model for visually impaired developers, promoting the use of `[[softwares/NVDA|NVDA]]` for accessible programming
- **Open Source Philosophy**: Practicing the philosophy of "from open source, give back to open source"
- **Technical Excellence**: Comprehensive showcase of `[[pl/Kotlin|Kotlin]]`, `[[pl/TypeScript|TypeScript]]`, and `[[pl/Rust|Rust]]` ecosystem capabilities

````xml
<examples xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="/_ai/meta/example.xsd">
  <good-example description="Maintain accessibility technology orientation WHEN editing content"
                user-input="Update README with new technical skills">
    <thinking>
      Check existing README structure and accessibility emphasis.
      Ensure new content aligns with open source philosophy and maintains visual appeal.
    </thinking>
    <tooling name="Read" params:path="C:\Users\<name>\project\TrueNine\README.md" />
    <tooling name="Update" params:path="C:\Users\<name>\project\TrueNine\README.md" />
    <summary>
      Updated technical stack section while preserving accessibility features and open source spirit.
      Maintained consistent badge styling and profile statistics display.
    </summary>
  </good-example>

  <bad-example description="NEVER modify personal photos or private information without explicit request">
    <tooling name="Update" params:path="C:\Users\<name>\project\TrueNine\personal_photo.jpeg" />
    <summary>
      Personal photos, Alipay QR codes, and contact information are private assets.
      MUST NOT modify without explicit user instruction.
    </summary>
  </bad-example>
</examples>
````

## [STEP-1] Project Structure

### [STEP-1.1] Repository Layout

This project follows a simple GitHub Profile structure, optimized for `[[frameworks/Jekyll|Jekyll]]` rendering:

```md
- `README.md`: Main showcase page containing technical stack badges and project display
- `ACKNOWLEDGMENTS.md`: Acknowledgment document emphasizing community support and accessibility technology advocates
- `LICENSE`: CC BY-NC-ND 4.0 license file
- `QA.md`: Q&A document (to be completed)
- `SUPPORTERS.md`: Supporter list (to be completed)
- `personal_photo.jpeg`: Personal avatar photo
- `alipay_qrcode.jpg`: Alipay donation QR code
- `AGENTS.md`: AI Agent working guide (English)
- `CLAUDE.md`: Claude-specific project configuration
- `.gitignore`: Jekyll and GitHub Pages ignore rules
```

### [STEP-1.2] Technical Stack Overview

- **Core Languages**: `[[pl/Kotlin|Kotlin]]` (backend), `[[pl/TypeScript|TypeScript]]` (frontend), `[[pl/Rust|Rust]]` (system-level)
- **Backend Technologies**: `[[frameworks/Spring Boot|Spring Boot]]`, `[[dbs/PostgreSQL|PostgreSQL]]`, `[[dbs/Redis|Redis]]`, `[[platforms/Docker|Docker]]`
- **Frontend Technologies**: `[[frameworks/Vue.js|Vue.js]]`, `[[frameworks/Nuxt.js|Nuxt.js]]`, `[[frameworks/TailwindCSS|TailwindCSS]]`, `[[platforms/Vite|Vite]]`
- **Development Tools**: `[[softwares/IntelliJ IDEA|IntelliJ IDEA]]`, `[[softwares/VS Code|VS Code]]`, `[[softwares/Git|Git]]`, `[[platforms/Gradle|Gradle]]`

### [STEP-1.3] Main Projects

- **`[[projects/compose-server|compose-server]]`**: `[[pl/Kotlin|Kotlin]]` backend framework built with `[[frameworks/Spring Boot|Spring Boot]]`
  - Repository: https://github.com/TrueNine/compose-server
  - Focus: Reusable backend components and utilities
- **`[[projects/compose-client|compose-client]]`**: Frontend toolkit for `[[pl/TypeScript|TypeScript]]` and `[[frameworks/Vue.js|Vue.js]]`
  - Repository: https://github.com/TrueNine/compose-client
  - Focus: Common UI components and utility functions

````xml
<examples xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="/_ai/meta/example.xsd">
  <good-example description="Verify project information accuracy before updating"
                user-input="Add new project to README showcase section">
    <thinking>
      Check actual project existence and public visibility.
      Verify technical stack alignment and description accuracy.
      Ensure badge format consistency with existing projects.
    </thinking>
    <tooling name="Search" params:pattern="compose-server" />
    <tooling name="Read" params:path="C:\Users\<name>\project\TrueNine\README.md" />
    <tooling name="Update" params:path="C:\Users\<name>\project\TrueNine\README.md" />
    <summary>
      Verified project information matches reality before adding to showcase table.
      Maintained consistent badge styling and project description format.
    </summary>
  </good-example>

  <bad-example description="NEVER add unconfirmed projects or technical skills">
    <summary>
      Adding unverified projects or skills violates authenticity principles.
      MUST verify through user confirmation or repository access before adding.
    </summary>
  </bad-example>
</examples>
````

## [STEP-2] AI Agent Working Modes

### [STEP-2.1] Content Management Mode

**Applicable Scenarios**: Update README.md, maintain profile showcase quality

**Core Responsibilities**:
- Keep badge styling and layout structure visually consistent
- Highlight accessibility technology (`[[softwares/NVDA|NVDA]]`, screen magnifiers) and open source values
- Ensure technical stack badges remain accurate and up-to-date
- Maintain GitHub statistics widgets and profile visitor counters

````xml
<examples xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="/_ai/meta/example.xsd">
  <good-example description="Preserve badge format WHEN updating technical stack"
                user-input="Add new backend framework to technical stack">
    <tooling name="Read" params:path="C:\Users\<name>\project\TrueNine\README.md" />
    <tooling name="Update" params:path="C:\Users\<name>\project\TrueNine\README.md" />
    <summary>
      Added new framework badge matching existing style (flat-square style, consistent color scheme).
      Verified official badge availability on shields.io before insertion.
    </summary>
  </good-example>

  <bad-example description="Breaking visual consistency with mismatched styles">
    <summary>
      Inconsistent badge styles or colors disrupt professional appearance.
      MUST follow existing flat-square style using official logos and standard colors.
    </summary>
  </bad-example>
</examples>
````

### [STEP-2.2] Documentation Enhancement Mode

**Applicable Scenarios**: Editing ACKNOWLEDGMENTS.md, QA.md, SUPPORTERS.md

**Core Responsibilities**:
- Maintain grateful and community-oriented tone
- Emphasize accessibility technology community contributions
- Encourage open source participation and knowledge sharing
- Preserve inclusive and welcoming language

````xml
<examples xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="/_ai/meta/example.xsd">
  <good-example description="Use appropriate categorization WHEN adding acknowledgment entries"
                user-input="Thank contributor who helped with accessibility testing">
    <tooling name="Read" params:path="C:\Users\<name>\project\TrueNine\ACKNOWLEDGMENTS.md" />
    <tooling name="Update" params:path="C:\Users\<name>\project\TrueNine\ACKNOWLEDGMENTS.md" />
    <summary>
      Added contributor in "Accessibility Technology Advocates" section with appropriate description.
      Maintained grateful tone consistent with existing acknowledgments.
    </summary>
  </good-example>

  <bad-example description="Using inappropriate tone or lacking context">
    <summary>
      Acknowledgments MUST include context explaining contributions.
      Avoid generalized "thanks for help" without specific details.
    </summary>
  </bad-example>
</examples>
````

### [STEP-2.3] Link and Metadata Maintenance Mode

**Applicable Scenarios**: Verify external links, update contact information, maintain badges

**Core Responsibilities**:
- Verify GitHub repository links and external references
- Ensure badge URLs resolve correctly
- Update profile visitor counters and statistics widgets as needed
- Maintain accuracy of contact information (QQ, Bilibili, Gmail)

````xml
<examples xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="/_ai/meta/example.xsd">
  <good-example description="Verify and update broken external links"
                user-input="Check all project links are working">
    <thinking>
      Scan README for external links to repositories and services.
      Verify each link points to correct destination.
      Update any redirected or broken links.
    </thinking>
    <tooling name="Read" params:path="C:\Users\<name>\project\TrueNine\README.md" />
    <tooling name="Update" params:path="C:\Users\<name>\project\TrueNine\README.md" />
    <summary>
      Verified all GitHub repository links and updated one outdated shields.io badge URL.
      All external links now resolve correctly.
    </summary>
  </good-example>

  <bad-example description="Changing contact information without explicit instruction">
    <summary>
      Contact information (QQ, Bilibili, Gmail, etc.) is personal data.
      MUST NOT modify without explicit user request.
    </summary>
  </bad-example>
</examples>
````

## [STEP-3] Content Standards

### [STEP-3.1] Core Principles

- **Professionalism**: Maintain accuracy of high-quality technical content
- **Inclusivity**: Emphasize accessibility technology and diverse community values
- **Openness**: Encourage open source contributions and knowledge sharing
- **Authenticity**: Ensure all showcased information matches reality

### [STEP-3.2] Technical Standards

- **Jekyll Compatibility**: All content MUST render correctly on GitHub Pages
- **Markdown Standards**: Follow standard `[[pl/Markdown|Markdown]]` syntax and GitHub Flavored Markdown extensions
- **Image Optimization**: Use appropriate image formats and sizes for fast loading
- **Badge Consistency**: Use shields.io flat-square style badges with official logos

````xml
<examples xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="/_ai/meta/example.xsd">
  <good-example description="Add new technical badge with consistent styling">
    ```markdown
    ![New Framework](https://img.shields.io/badge/Framework_Name-HEX_COLOR?style=flat-square&logo=official-logo&logoColor=white)
    ```
  </good-example>

  <bad-example description="Using inconsistent badge style">
    ```markdown
    ![New Framework](https://img.shields.io/badge/Framework-COLOR?style=for-the-badge)
    ```
    <summary>
      Badge style "for-the-badge" disrupts visual consistency with existing flat-square style.
      MUST use flat-square style matching other badges.
    </summary>
  </bad-example>
</examples>
````

### [STEP-3.3] License and Copyright

- **License Type**: CC BY-NC-ND 4.0 (Creative Commons Attribution-NonCommercial-NoDerivatives)
- **License Permissions**: Allow viewing and sharing for non-commercial purposes
- **Restrictions**: Prohibit modifications, derivatives, and commercial use
- **Attribution Requirements**: Proper citation needed WHEN referencing content

````xml
<examples xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="/_ai/meta/example.xsd">
  <bad-example description="NEVER modify LICENSE file without explicit instruction">
    <tooling name="Update" params:path="C:\Users\<name>\project\TrueNine\LICENSE" />
    <summary>
      License type changes have legal implications and MUST NOT be modified without explicit user request.
      Current CC BY-NC-ND 4.0 license is an intentional choice and protected.
    </summary>
  </bad-example>
</examples>
````

## [STEP-4] AI Agent Responsibility Boundaries

### [STEP-4.1] Tasks That SHOULD Be Proactively Executed

AI Agent SHOULD execute without explicit approval:

- **Content Updates**: Refresh technical stack information to match actual capabilities
- **Link Verification**: Verify and fix broken external links
- **Format Standardization**: Ensure consistent `[[pl/Markdown|Markdown]]` formatting and badge styling
- **Accessibility Enhancement**: Improve content accessibility for screen readers
- **Documentation Maintenance**: Keep acknowledgments and documentation up-to-date

````xml
<examples xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="/_ai/meta/example.xsd">
  <good-example description="Proactively fix broken badge URL"
                user-input="Check README for issues">
    <thinking>
      Found outdated shields.io badge URL returning 404.
      Update to current badge API endpoint maintaining same visual appearance.
    </thinking>
    <tooling name="Update" params:path="C:\Users\<name>\project\TrueNine\README.md" />
    <summary>
      Fixed broken badge URL while maintaining same visual appearance.
      Verified new URL resolves correctly.
    </summary>
  </good-example>
</examples>
````

### [STEP-4.2] Tasks That MUST NOT Be Executed

AI Agent MUST NOT execute without explicit user instruction:

- **Personal Information**: Modify photos, QR codes, contact information
- **License Changes**: Change license type or copyright information
- **Unverified Content**: Add unconfirmed technical skills or projects
- **Core Identity**: Change personal introduction, philosophy, or value statements

````xml
<examples xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="/_ai/meta/example.xsd">
  <bad-example description="NEVER modify core personal values without explicit request">
    <summary>
      The statement "from open source, give back to open source" represents core personal philosophy.
      Changing such identity-defining content without explicit instruction violates autonomy.
    </summary>
  </bad-example>

  <bad-example description="NEVER add skills without user verification">
    <summary>
      Adding "Machine Learning Expert" without confirmation would misrepresent capabilities.
      MUST verify all technical claims through user confirmation or observable evidence.
    </summary>
  </bad-example>
</examples>
````

### [STEP-4.3] Special Considerations

**Accessibility Technology**:
- Pay special attention to accuracy of `[[softwares/NVDA|NVDA]]` and accessibility tool mentions
- Ensure content promotes positive perception of accessibility technology in programming
- Verify correctness of any accessibility-related technical claims

**Open Source Spirit**:
- Maintain consistency with "from open source, give back to open source" philosophy
- Encourage community participation and open source contributions
- Ensure project showcase reflects actual open source engagement

**Personal Privacy**:
- Respect boundaries of personal information and photos
- Avoid proactively adding sensitive details such as addresses or detailed schedules
- Maintain existing privacy level WHEN updating content

**Technical Accuracy**:
- Verify all technical stack claims match actual project usage
- Ensure project descriptions accurately reflect repository content
- Cross-check links point to correct and active repositories

````xml
<examples xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="/_ai/meta/example.xsd">
  <good-example description="Verify accessibility technology claims before publishing"
                user-input="Mention NVDA support in new project">
    <thinking>
      Check if new project actually implements NVDA compatibility.
      Verify through code review or user confirmation before claiming accessibility support.
      Ensure claim accuracy to maintain credibility as accessibility advocate.
    </thinking>
    <summary>
      Verified NVDA compatibility through project code review before adding accessibility claim.
      Accuracy is crucial for credibility as accessibility technology role model.
    </summary>
  </good-example>

  <bad-example description="Making unverified accessibility claims">
    <summary>
      Claiming "fully NVDA compatible" without verification damages credibility.
      Accessibility technology accuracy is crucial given project's advocacy role.
    </summary>
  </bad-example>
</examples>
````

## [STEP-5] Workflow Integration

### [STEP-5.1] Access Project Files

WHEN handling TrueNine project tasks:

1. Locate project at `C:\Users\<name>\project\TrueNine\` on Windows or `~/project/TrueNine/` on Unix
2. Read target files before making changes to understand current structure
3. Validate changes according to project standards defined in this document
4. Maintain consistency with existing format WHEN updating files

````xml
<examples xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="/_ai/meta/example.xsd">
  <good-example description="Complete workflow for README update"
                user-input="Add new framework to backend technical stack">
    <thinking>
      Locate TrueNine project and read current README structure.
      Identify backend technical stack section.
      Verify new framework is actually used in projects.
      Create badge matching existing flat-square style.
      Insert in appropriate position maintaining logical grouping.
    </thinking>
    <tooling name="Read" params:path="C:\Users\<name>\project\TrueNine\README.md" />
    <tooling name="Update" params:path="C:\Users\<name>\project\TrueNine\README.md" />
    <summary>
      Added new backend framework badge in consistent flat-square style.
      Positioned in backend technical stack section with logical grouping.
      Verified framework's active use in compose-server project.
    </summary>
  </good-example>
</examples>
````

### [STEP-5.2] Coordination with Knowledge Base

The TrueNine project has corresponding knowledge base documentation in `[[projects/TrueNine_Life|TrueNine_Life]]` repository:

- Knowledge Card: `[[projects/TrueNine|projects/TrueNine.md]]`
- Project Prompts: `[[_airef/TrueNine/|_airef/TrueNine/]]`
- Ensure project updates are reflected in knowledge base documentation
- Maintain consistency between actual project state and knowledge records

````xml
<examples xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="/_ai/meta/example.xsd">
  <good-example description="Update knowledge base after project changes"
                user-input="Added new major project to TrueNine profile">
    <thinking>
      Updated TrueNine README with new project showcase.
      Should also update projects/TrueNine.md knowledge card to maintain sync.
      Verify project description consistency across both documents.
    </thinking>
    <tooling name="Update" params:path="C:\Users\<name>\project\TrueNine\README.md" />
    <tooling name="Update" params:path="projects/TrueNine.md" />
    <summary>
      Added new project to both TrueNine profile and knowledge base card.
      Maintained consistency of project description and technical stack information.
    </summary>
  </good-example>
</examples>
````

