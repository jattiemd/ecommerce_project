function Review({ rating, reviewer, comment, date }) {
  
  return (
    <>
      <div className="flex justify-center mt-4">
        <div className="flex flex-col">
          <div className="p-3 border-t border-b border-gray-200 w-304">
            <p className="text-gray-600 text-2xl">⭐{rating}<small>/5</small></p>
            <p className="text-xl ml-4 font-semibold">{reviewer}</p>
            <p className="ml-4 mt-4 mb-2">{comment}</p>
            <small className="text-gray-500 ml-4">{date}</small>
          </div>
        </div>
      </div>

    </>
  );
}

export default Review;
