+PreparedStatement preparedStatement = connection.prepareStatement("SELECT * FROM users WHERE name = ? AND email = ?");
+        preparedStatement.setString(1, name);
+        preparedStatement.setString(2, email);
+        preparedStatement.executeUpdate();
