    String query = "SELECT * FROM users WHERE " + "first_name" = ? AND " + "last_name" = ?;

    PreparedStatement ps = conn.prepareStatement(query);
    ps.setString(1, params.first_name);
    ps.setString(2, params.last_name);
    ResultSet rs = ps.executeQuery();