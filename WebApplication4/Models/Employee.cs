using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;

namespace WebApplication4.Models
{
    public class Employee
    {
        [JsonProperty("id")]
        public int Id { get; set; }
        [JsonProperty("name")]
        public string Name { get; set; }
        [JsonProperty("social")]
        public string Social { get; set; }
        [JsonProperty("birthDate")]
        public DateTime BirthDate { get; set; }
        [JsonProperty("salary")]
        public decimal Salary { get; set; }
    }
}