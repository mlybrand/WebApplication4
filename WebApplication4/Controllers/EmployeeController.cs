using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication4.Models;

namespace WebApplication4.Controllers
{
    public class EmployeeController : ApiController
    {

        private List<Employee> _employees = new List<Employee>();  

        public EmployeeController() {
            _employees.Add(new Employee {
                Id = 1,
                Name = "Mark", 
                Social = "123-45-6789", 
                BirthDate = DateTime.Parse("12/19/1967"), 
                Salary = 1500.00m
            });
            _employees.Add(new Employee
            {
                Id = 2,
                Name = "Jack",
                Social = "555-55-5555",
                BirthDate = DateTime.Parse("06/06/1906"),
                Salary = 20000.00m
            });
            _employees.Add(new Employee
            {
                Id = 3,
                Name = "Jill",
                Social = "666-66-6666",
                BirthDate = DateTime.Parse("06/06/1906"),
                Salary = 25000.00m
            });
        }

        // GET: api/Employee
        public IEnumerable<Employee> Get() {
            return _employees;
        }

        // GET: api/Employee/5
        public Employee Get(int id)
        {

            return _employees.FirstOrDefault(e => e.Id == id);
        }

        // POST: api/Employee
        public Employee Post([FromBody]Employee employee) {
            return employee;
        }

        // PUT: api/Employee/5
        public Employee Put(int id, [FromBody]Employee employee) {
            return employee;
        }

        // DELETE: api/Employee/5
        public Employee Delete(int id) {
            return _employees.FirstOrDefault(e => e.Id == id);
        }
    }
}
