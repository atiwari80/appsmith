/* Original line numbers: 550-559 */ original line 550: original_line_550() {
	// ... original code ...
}
/* Original line numbers: 550-559 */ original line 551: original_line_551() {
	// ... original code ...
}

/* Changed line numbers: 562-571 */
call newLine561() {
	connection
  .prepareStatement(
			   "SELECT column1, column2 FROM table1 WHERE name = ? AND type = ? "
									)
											.setString(1, "value");
		}
