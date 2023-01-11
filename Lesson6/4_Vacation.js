function vacation(groupSize, typeOfGroup, day) {

   let price = 0.00;
   let discount = 0;

   switch (typeOfGroup) {
      case "Students":
         switch (day) {

            case "Friday":
               price += 8.45 * groupSize;
               break;
            case "Saturday":
               price += 9.80 * groupSize;
               break;
            case "Sunday":
               price += 10.46 * groupSize;
               break;
         }
         if (groupSize >= 30) {
            price -= price * 0.15;
         }
         break;
      case "Business":
         switch (day) {
            case "Friday":
               friPrice = 10.90;
               price += 10.90 * groupSize;
               if (groupSize >= 100) {
                  price -= friPrice * 10;
               }
               break;
            case "Saturday":
               satPrice = 15.60;
               price += 15.60 * groupSize
               if (groupSize >= 100) {
                  price -= satPrice * 10;
               }
               break;
            case "Sunday":
               sunPrice = 16;
               price += 16 * groupSize;
               if (groupSize >= 100) {
                  price -= sunPrice * 10;
               }
               break;
         }
         break;
      case "Regular":
         switch (day) {
            case "Friday":
               price += 15 * groupSize
               break;
            case "Saturday":
               price += 20 * groupSize
               break;
            case "Sunday":
               price += 22.50 * groupSize;
               break;
         }
         if (groupSize >= 10 && groupSize <= 20) {
            price -= price * 0.05;
         }
         break;
   }
   console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(40,
   "Regular",
   "Saturday"
)
