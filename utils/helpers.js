module.exports = {
  get_emoji: () => {
    const randomNum = Math.random();
    let book = "📗";

    if (randomNum > 0.7) {
      book = "📘";
    } else if (randomNum > 0.4) {
      book = "📙";
    }

    return `<span for="img" aria-label="book">${book}</span>`;
  },

  format_date: (date) => {
    // We use the 'toLocaleTimeString()' method to format the time as H:MM:SS AM/PM
    return date.toLocaleDateString();
  },

  user_name:(email)=>{
    if(email){
      console.log("email = ",email)
      const emailRegex = /^([^@]+)@[^@]+$/;
      const match = email.match(emailRegex);
      return match ? match[1] : null;
    }
  },

  reviewStar: (number) => {
    let reviews = ""
    for(let i = 0; i<number; i++){
      reviews += "⭐"
    }
    return reviews
  }
}; 
