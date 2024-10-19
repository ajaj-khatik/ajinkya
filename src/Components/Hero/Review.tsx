const reviews = [
  {
    name: "Shweta Arora",
    rating: 4,
    review: "Got an amazing deal Thank you CJ-7.",
  },
  {
    name: "Manav Nath",
    rating: 4,
    review: "Really nice  👍",
  },
  {
    name: "Sandeep Kumar",
    rating: 5,
    review: " appreciate this one 💛",
  },
  {
    name: "Sohail Khan",
    rating: 4,
    review: "Fresh Chicken at good price 🙏 thnx CJ-7",
  },
  {
    name: "Akilah",
    rating: 5,
    review: "Best 💯 got it",
  },
  {
    name: "Akash Singh",
    rating: 5,
    review: "Mind-blowing purchase",
  },
];

const ReviewSection = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-white">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Customer Reviews</h2>
        <div className="mt-2">
          <span className="text-4xl font-bold">4.64</span>
          <span className="ml-2 text-yellow-500">★★★★☆</span>
          <p className="text-gray-500">Based on 11 reviews</p>
        </div>
        <button className="mt-4 px-4 py-2 bg-black text-white rounded">
          Write a review
        </button>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviews.map((review, index) => (
          <div key={index} className="p-4 border rounded">
            <div className="flex items-center mb-2">
              <span className="text-yellow-500">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </span>
            </div>
            <p className="text-gray-700">{review.review}</p>
            <p className="mt-2 text-sm text-gray-500">by {review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
