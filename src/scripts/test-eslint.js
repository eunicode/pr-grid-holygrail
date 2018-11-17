// Hover over errors, or click on variable names with errors, and a lightbulb
// will pop-up.
// Click on the light-bulb and you'll be presented with fix options.
// You can choose auto-fix all errors.

// Ignore expected rule violations
// I get an ESLint warning for using console.log.
// [eslint] Unexpected console statement. (no-console)
// To disable linting, add a comment before the line.
// Use the eslint-disable-next-line trigger + rule name (no-console)

// eslint-disable-next-line no-console
console.log("hi test");

// Test whether Prettier is formatting Javascript on save
function test() {
  return 1 + 2;
}
