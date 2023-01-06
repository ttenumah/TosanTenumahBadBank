function Home(){
  return (
    <Card
      bgcolor="secondary"
      txtcolor="black"
      header="BadBank"
      title="Welcome to the bank"
      text="Your number one choice for banking."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
