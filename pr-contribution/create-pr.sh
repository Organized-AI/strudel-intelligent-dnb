#!/bin/bash
# Script to create PR for intelligent_dnb genre
# Run this from the strudel-mcp-server repo root

set -e

echo "=== Creating PR for intelligent_dnb genre ==="

# 1. Fork if needed (skip if already forked)
echo "Step 1: Ensuring fork exists..."
gh repo fork williamzujkowski/strudel-mcp-server --clone=false 2>/dev/null || echo "Fork already exists"

# 2. Clone your fork if not already cloned
if [ ! -d "strudel-mcp-server" ]; then
  echo "Step 2: Cloning fork..."
  gh repo clone Organized-AI/strudel-mcp-server
  cd strudel-mcp-server
else
  cd strudel-mcp-server
  git fetch origin
fi

# 3. Create feature branch
echo "Step 3: Creating feature branch..."
git checkout -b feature/add-intelligent-dnb-genre

# 4. Apply changes
echo "Step 4: Applying code changes..."
echo "
Please manually:
1. Copy code from PatternGenerator-additions.ts to src/services/PatternGenerator.ts
2. Copy intelligent-dnb.test.ts to tests/
3. Copy example patterns to patterns/examples/
4. Update README.md with additions from README-additions.md
"

read -p "Press Enter when changes are applied..."

# 5. Run tests
echo "Step 5: Running tests..."
npm test

# 6. Commit
echo "Step 6: Committing changes..."
git add .
git commit -m "feat: Add intelligent_dnb genre preset

- Add intelligent_dnb, liquid_dnb, atmospheric_dnb genres
- Add bukem, intelligent, liquid, atmospheric as aliases  
- Include rolling breaks using dirt-samples
- Jazz chord voicings (minor 9ths)
- Deep sine sub bass (80Hz LPF)
- Ethereal pads and strings
- Three drum complexity levels
- Comprehensive test suite
- Example patterns included

Closes #XXX"

# 7. Push
echo "Step 7: Pushing to fork..."
git push -u origin feature/add-intelligent-dnb-genre

# 8. Create PR
echo "Step 8: Creating pull request..."
gh pr create \
  --repo williamzujkowski/strudel-mcp-server \
  --title "feat: Add intelligent_dnb genre preset" \
  --body-file ../pr-contribution/PR-DESCRIPTION.md

echo "=== PR created successfully! ==="
