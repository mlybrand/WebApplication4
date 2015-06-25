using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication4.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Social { get; set; }
        public DateTime BirthDate { get; set; }
        public decimal Salary { get; set; }
    }
}