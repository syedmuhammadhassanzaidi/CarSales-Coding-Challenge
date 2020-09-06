using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CarSales.Data;
using CarSales.Models;
using CarSales.Lists;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Web;
using Microsoft.AspNetCore.Session;
using System.Net;

namespace CarSales.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class CarsController : ControllerBase
    {
        public Lists.Lists myCars;
        private readonly CarSalesContext _context;
        public CarsController(CarSalesContext context, Lists.Lists myList)
        {
            _context = context;
            myCars = myList;
        }

        // GET: api/Cars
        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<Car>>> GetCar()
        //{
        //    return await _context.Car.ToListAsync();
        //}

        [HttpGet]
        public CarSales.Lists.Lists GetCars()
        {
            return myCars;
        }

        // GET: api/Cars/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Car>> GetCar(string id)
        {
            var car = await _context.Car.FindAsync(id);

            if (car == null)
            {
                return NotFound();
            }

            return car;
        }

        // PUT: api/Cars/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCar(string id, Car car)
        {
            if (id != car.ID)
            {
                return BadRequest();
            }

            _context.Entry(car).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CarExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Cars
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Car>> PostCar(Car car)
        {
            myCars.new_cars.Add(car);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (CarExists(car.ID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetCar", new { id = car.ID }, car);
        }

        // DELETE: api/Cars/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Car>> DeleteCar(string id)
        {
            var car = await _context.Car.FindAsync(id);
            if (car == null)
            {
                return NotFound();
            }

            _context.Car.Remove(car);
            await _context.SaveChangesAsync();

            return car;
        }

        private bool CarExists(string id)
        {
            return _context.Car.Any(e => e.ID == id);
        }
    }
}
