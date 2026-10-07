---
name: create-reusable-skill
description: "Use when: turning a recurring workflow into a reusable SKILL.md for the project. Extract decision points, completion checks, and the step-by-step process, then save the skill in the correct customization location."
argument-hint: What workflow should become a reusable skill?
---

# Create a Reusable Skill

## Purpose
Turn a repeated multi-step workflow into a reusable skill that can be invoked later with a short, discoverable description. The result should be clear enough for another agent or teammate to use without re-deriving the process.

## Workflow

1. Identify the recurring task or workflow.
2. Extract the step-by-step process being used.
3. Record important decision points and branching logic.
4. Define quality criteria or completion checks.
5. Draft the skill in SKILL.md form.
6. Save it in the correct location.
7. Validate the frontmatter and description.
8. Summarize the skill outcome and suggest example prompts.

## Decision Rules

- If the task is a multi-step workflow with reusable logic, create a skill.
- If the task is a single, focused operation with inputs, prefer a prompt.
- If the guidance should apply broadly across the project, prefer instructions.
- If the workflow needs isolated execution or tool restrictions, consider a custom agent.

## Output Expectations

The final skill should include:
- A clear purpose statement.
- A numbered workflow or checklist.
- Decision points and when to branch.
- Completion checks or validation steps.
- A useful description field that contains trigger keywords.
- The correct saved path for the project.

## Quality Checklist

Before finishing, confirm:
- The skill name is clear and specific.
- The description contains trigger words such as "Use when".
- YAML frontmatter is syntactically valid.
- The workflow is understandable without extra context.
- The instructions are actionable and concrete.
- The skill is saved in the correct folder.
- Example prompts are included or suggested.

## Default Storage

For a project-wide workflow, save the skill here:
- .github/skills/<skill-name>/SKILL.md

For a personal workflow, prefer the user-level customization area if the environment supports it.

## Example Prompts

- "Turn this debugging checklist into a reusable skill."
- "Package our code review workflow into a SKILL.md."
- "Create a skill for onboarding a new developer to this project."
- "Generalize this implementation pattern into a reusable workflow skill."

## Related Customizations

After creating a skill, consider:
- A project instruction for always-on guidance.
- A prompt for one-off tasks that reuse the same workflow.
- A custom agent if the process needs separation or stricter tool limits.
