function AllData(){
  const ctx = React.useContext(UserContext);
  let users = [...ctx.users];

  function userInfo(user) {
    return [user.name, user.email, user.password, user.balance];
  }

  function userNumber(i) {
    return (`User ${i+1}`);
  }
  

  console.log(JSON.stringify(users));
  return (
    <>
    {users.map((user, i) => (
      <Card
      index = {i}
      key = {i} 
      bgcolor="success"
      txtcolor="white"
      header="Users Information"
      text={userNumber(i)}
      allData={userInfo(user)}
      /> )
    )}
    </>
  );
}

