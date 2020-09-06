using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarSales.Models
{
    public abstract class Vehicle
    {
        public string ID { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public string VehicleType { get; set; }
    }
}
