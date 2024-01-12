function describe_city(city: string, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
  }
  
  describe_city("Karachi");
  describe_city("Lahore");
  describe_city("New York", "USA");
  