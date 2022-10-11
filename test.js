var obj = {

    age: '25',

    findageArrowFn: () => {

     console.log(this.age)

    },

    findAgeNormalFn: function(){

     console.log(this.age)

    }

   }



   obj.findageArrowFn();

   obj.findAgeNormalFn();

