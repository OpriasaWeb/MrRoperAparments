apartment = 20
units = 15
months = 12
rent = 0
apartmentCount = 0

for i in range(1, apartment + 1):
    print("Apartment:", i)
    apartmentCount = apartmentCount + 1
    for j in range(1, units + 1):
        print("Units:", j)
        for k in range(1, months + 1):
            rent = rent + 800
            print("For month", k, "800")
        print("Total price", rent, "amount for this unit", j, "under building", apartmentCount)