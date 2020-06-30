
{
  enum Status {
    OFFLINE,
    ONLINE = 4,
    ERROR
  }
  
  console.log(Status.ONLINE)
  console.log(Status[4])
}