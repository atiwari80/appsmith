PreparedStatement pstmt = connection.prepareStatement("SELECT * FROM filter WHERE created_at >= (select max(created_at) FROM filter where category = ?)");
pstmt.setString(1, category);
ResultSet rs = pstmt.executeQuery();