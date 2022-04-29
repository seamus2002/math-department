const mathCourses = [
    {
        id: "math10000",
        course: "MATH 10000",
        title: "Basic Structures of Mathematics",
        semesters: "Fall, Spring, Summer",
        credits: 3,
        description: "Symbolic logic, sets, number systems, relations and operations and topics in probability and statistics.",
        prereqs: "None"
    },
    {
        id: "math10100",
        course: "MATH 10100",
        title: "Algebra for College Students",
        semesters: "Fall, Spring, Summer",
        credits: 3,
        description: "Topics in algebra, graphing and functions. Includes: algebraic and graphical solutions to systems of equations and inequalities; absolute value, polynomial, rational and radical expressions and equations; complex numbers; the function concept; introduction to polynomial, rational and exponential functions and their graphs.",
        prereqs: "Math Proficient and appropriate score on Hunter Math Placement Exam"
    },
    {
        id: "math10200",
        course: "MATH 10200",
        title: "Mathematics and Everyday Life",
        semesters: "Fall, Spring, Summer",
        credits: 3,
        description: "Students will learn how to model real world problems with mathematics, and learn techniques for solving them. Topics include personal finance, statistical reasoning, probability, exponential growth, and voting theory.",
        prereqs: "None"
    },
    {
        id: "math10400",
        course: "MATH 10400",
        title: "Mathematics for Elementary Education I",
        semesters: "Fall, Spring",
        credits: 3,
        description: "Fundamental and relevant mathematics as recommended by the NCTM for prospective elementary school teachers, including problem solving, sets, logic, numeration, computation, integers, and number theory.",
        prereqs: "MATH 10100/MATH 101EN with a C or better or MATH 11000 or appropriate Hunter Math Placement Exam (Only open to Childhood Education BA)"
    },
    {
        id: "math10500",
        course: "MATH 10500",
        title: "Mathematics for Elementary Education II",
        semesters: "Fall, Spring",
        credits: 3,
        description: "Continuation of MATH 10400. Continuation of the content of the mathematics recommended by the NCTM for prospective elementary school teachers, including probability, statistics, plane and transformational geometry, congruence and similarity.",
        prereqs: "MATH 10400 with a C or better (Only open to Childhood Education 1-6 Quest BA and Macaulay Honors College Childhood Education 1-6 Quest BA majors)"
    },
    {
        id: "math12400",
        course: "MATH 12400",
        title: "College Algebra and Trigonometry",
        semesters: "Fall, Spring, Summer",
        credits: 3,
        description: "This course is replacing the course MATH 12500 for students who do not intend to take calculus. Functions and their graphs; linear, quadratic, polynomial, rational, exponential, logarithmic, and trigonometric functions; topics in trigonometry; graphical and analytical solutions to systems of equations. Students who would plan on taking calculus should register for MATH 12550 instead of this course. Students who complete this course will need to register for MATH 14000 in order to take calculus. This course is equivalent to Math 12500 for grade replacement purposes.",
        prereqs: "MATH 10100/MATH 101EN or the appropriate score on the Hunter Math Placement Exam (Not open to students who have taken MATH 12500 or MATH 12550)"
    },
    {
        id: "math12550",
        course: "MATH 12550",
        title: "Precalculus with Workshop",
        semesters: "Fall, Spring, Summer",
        credits: 4,
        description: "This course replaces the course MATH 12500 for students who intend to take calculus. It is designed to develop an understanding of topics and skills which are fundamental to the study of calculus and other science classes. The topics covered are: linear, quadratic, polynomial, rational, exponential, logarithmic, and trigonometric functions and their graphs and applications; the Fundamental Theorem of Algebra; sequences, sums, and the Binomial Theorem. In addition to lecture, students are also required to attend a 50-minute recitation session once a week. This course is equivalent to Math 12500 for grade replacement purposes.",
        prereqs: "Math 10100/MATH 101EN with a grade of B- or better OR MATH 10150 with a grade of C or better; or the appropriate score on the Hunter Math Placement Exam (Not open to students who have taken MATH 12500)"
    },
    {
        id: "math12600",
        course: "MATH 12600",
        title: "Precalculus Technology Laboratory",
        semesters: "Fall, Spring",
        credits: 1,
        description: "Students are introduced to MATHEMATICA as a tool for exploring qualitative features of functions and solving pre-calculus problems: simplifying algebraic expressions, solving equations, plotting functions and curves, finding and approximating zeros and solving systems of equations. MATH 12600 cannot be taken for credit after a student has passed MATH 15000. Students who have passed MATH 15000 should register for MATH 15400 to satisfy the symbolic proficiency requirement.",
        prereqs: "MATH 12400 or MATH 12500 or MATH 12550 or appropriate score on the Hunter Math Placement Exam."
    },
    {
        id: "math15000",
        course: "MATH 15000",
        title: "Calculus I",
        semesters: "Fall, Spring, Summer",
        credits: 4,
        description: "Limits, continuity, differentiation and integration of elementary functions and trigonometric functions, applications.",
        prereqs: "MATH 12550 with a B- or better, or (coreq MATH 14000 and one of MATH 12400, MATH 12500, or MATH 12550), or appropriate score on Hunter Math Placement Exam"
    },
    {
        id: "math15200",
        course: "MATH 15200",
        title: "Calculus for the Life and Social Sciences",
        semesters: "Fall, Spring",
        credits: 4,
        description: "Limits, continuity and the derivative. The power rule, product and quotient rules, the chain rule, and implicit differentiation. The Mean Value Theorem and the Intermediate Value Theorem. curve sketching and optimization, and linear approximation. Riemann integral and the Fundamental Theorem of Calculus. Various applications to economics, life sciences, and physical sciences.",
        prereqs: "MATH 12550 with a B- or better, or (coreq MATH 14000 and one of MATH 12400, MATH 12500, or MATH 12550), or appropriate score on Hunter Math Placement Exam"
    },
    {
        id: "math15500",
        course: "MATH 15500",
        title: "Calculus II",
        semesters: "Fall, Spring, Summer",
        credits: 4,
        description: "Differentiation and integration of transcendental functions, integration techniques, infinite sequences and series, improper integrals, polar coordinates.",
        prereqs: "MATH 15000"
    },
    {
        id: "math16000",
        course: "MATH 16000",
        title: "Matrix Algebra",
        semesters: "Fall, Spring, Summer",
        credits: 3,
        description: "Systems of linear equations, matrices, determinants, introduction to vector spaces and linear transformations, applications.",
        prereqs: "MATH 12400, MATH 12500, MATH 12550, or appropriate score on Hunter Math Placement Exam"
    }
]

export default mathCourses;