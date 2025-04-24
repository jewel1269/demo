const TotcIntro = () => {
  return (
    <section className="py-16 px-4 text-center bg-white">
      <h2 className="text-3xl font-bold mb-4">
        What is <span className="text-cyan-500 font-bold">TOTC?</span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        TOTC is a platform that allows educators to create online classes
        whereby they can store the course materials online; manage assignments,
        quizzes and exams; monitor due dates; grade results and provide students
        with feedback all in one place.
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Instructor Card */}
        <div
          className="relative rounded-xl overflow-hidden group"
          style={{
            backgroundImage: `url('/instructor.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "280px",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition duration-300"></div>
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
            <h3 className="text-lg font-bold mb-2">FOR INSTRUCTORS</h3>
            <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
              Start a class today
            </button>
          </div>
        </div>

        {/* Student Card */}
        <div
          className="relative rounded-xl overflow-hidden group"
          style={{
            backgroundImage: `url('/students.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "280px",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition duration-300"></div>
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
            <h3 className="text-lg font-bold mb-2">FOR STUDENTS</h3>
            <button className="px-6 py-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition">
              Enter access code
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotcIntro;
