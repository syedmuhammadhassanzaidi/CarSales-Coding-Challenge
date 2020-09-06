using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using CarSales.Models;

namespace CarSales.Data
{
    public class CarSalesContext : DbContext
    {
        public CarSalesContext (DbContextOptions<CarSalesContext> options)
            : base(options)
        {
        }

        public DbSet<CarSales.Models.Car> Car { get; set; }
    }
}
