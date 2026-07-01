    // Replace the SQL statement with aPreparedStatement
            PreparedStatement pst = connection.prepareStatement("SELECT column1, column2 FROM table WHERE name = ? AND age = ?");
            pst.setString(1, filterName);
            pst.setString(2, filterAge);
            Results = pst.executeQuery();            // ...