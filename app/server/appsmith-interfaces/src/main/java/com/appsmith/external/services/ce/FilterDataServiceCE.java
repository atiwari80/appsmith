// Before
String query = "UPDATE %s SET %s = %s WHERE %s = %s";
String table = tableName;
String column = columnName;
String value = valueObj.toString();
String condition = conditionObj.toString();

String sql = String.format(query, table, column, value, column, condition);
PreparedStatement preparedStatement = connection.prepareStatement(sql);

// After
String query = "UPDATE %s SET %s = ? WHERE %s = ?";
String table = tableName;
String column = columnName;
String condition = conditionObj.toString();

String sql = String.format(query, table, column, column);
PreparedStatement preparedStatement = connection.prepareStatement(sql);
preparedStatement.setString(1, valueObj.toString());
preparedStatement.setString(2, condition);
code
