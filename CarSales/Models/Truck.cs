using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarSales.Models
{
    public class Truck : Vehicle
    {
        public string Engine { get; set; }
        public string Doors { get; set; }
        public string Wheels { get; set; }
        public string BodyType { get; set; }
    }
}
