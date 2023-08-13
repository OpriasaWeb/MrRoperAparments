# Mr.Roper Apartment

Instruction: Mr. Roper owns 20 apartment buildings. Each building contains 15 units that he rents for $800 per month each. Design the application that would output 12 payment coupons for each of the 15 apartments in each of the 20 buildings. Each coupon should contain the building number (1 through 20), the apartment number (1 through 15), the month (1 through 12), and the amount of rent due.

Psuedocode:


          apartment - 20
          units - 15
          months 12
          rent = 0
          for let i = 0, i < apartment, i++

            for let j = 1, j <= units, i++

              message: unit j 

              for let k = 0, j < months, i++
                rent = rent + 800
                message: for each month k => 800 pesos
              endforloop

              message: total price => rent amount for this unit k under building i

            endforloop

          endforloop