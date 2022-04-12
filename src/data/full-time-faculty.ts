const fullTimeFaculty = [
    {
        id: 'bcherkas',
        name: 'Barry M. Cherkas',
        position: 'Professor, Department Chair',
        degree: 'Ph.D, Georgetown University',
        interests: 'Partial Differential Equations, Collegiate Mathematics Education',
        office: '915 HE',
        tel: '772-5741',
        email: 'bcherkas@hunter.cuny.edu',
        website:'http://math.hunter.cuny.edu/~bcherkas'
    },
    {
        id: 'abasmajian',
        name: 'Ara Basmajian',
        position: 'Professor',
        degree: 'Ph.D, SUNY Stony Brook',
        interests: 'Hyperbolic Geometry, Discrete Groups',
        office: '907 HE',
        tel: '772-5311',
        email: 'ara.basmajian@hunter.cuny.edu',
        website:'http://sites.google.com/view/basmajian/home'
    },
    {
        id: 'mbendersky',
        name: 'Martin Bendersky',
        position: 'Professor',
        degree: 'Ph.D, University of California, Berkeley',
        interests: 'Algebraic Topology',
        office: '902 HE',
        tel: '772-5374',
        email: 'mbenders@hunter.cuny.edu',
        website:'http://math.hunter.cuny.edu/~mbenders'
    },
    {
        id: 'dchess',
        name: 'Daniel S. Chess',
        position: 'Associate Professor',
        degree: 'Ph.D, Princeton University',
        interests: 'Structure theorems for diffeomorphisms',
        office: '913 HE',
        tel: '772-5750',
        email: 'dchess@hunter.cuny.edu',
        website:''
    },
    {
        id: 'rchurchill',
        name: 'Richard C. Churchill',
        position: 'Professor',
        degree: 'Ph.D, Universiy of Wisconsin',
        interests: 'Differential Algebra, Dynamic Systems',
        office: '909 HE',
        tel: '772-5304',
        email: 'richard.churchill@hunter.cuny.edu',
        website:''
    },
    {
        id: 'sclarkson',
        name: 'Sandra Pryor Clarkson',
        position: 'Professor',
        degree: 'EdD, University of Georgia',
        interests: 'Mathematics and Statistics Education',
        office: '931 HE',
        tel: '772-4904',
        email: 'sandra.clarkson@hunter.cuny.edu',
        website:''
    },
    {
        id: 'sgentile',
        name: 'Scott L. Gentile',
        position: 'Lecturer',
        degree: 'MA, Boston College',
        interests: 'Mathematics Education',
        office: '926 HE',
        tel: '396-6042',
        email: 'sgentile@hunter.cuny.edu',
        website:''
    },
    {
        id: 'ohadjiliadis',
        name: 'Olympia Hadjiliadis',
        position: 'Professor',
        degree: 'Ph.D, Columbia University',
        interests: 'None',
        office: '942 HE',
        tel: '212-772-4715',
        email: 'olympia.hadjiliadis@gmail.com',
        website:'http://math.hunter.cuny.edu/~olympia'
    },
    {
        id: 'ikapovich',
        name: 'Ilya Kapovich',
        position: 'Professor',
        degree: 'Ph.D, CUNY Graduate Center',
        interests: 'Geometric Group Theory, Geometric Topology',
        office: '917 HE',
        tel: '772-5303',
        email: 'ik535@hunter.cuny.edu',
        website:'http://math.hunter.cuny.edu/ilyakapo'
    },
    {
        id: 'okharlampovich',
        name: 'Olga Kharlampovich',
        position: 'Professor',
        degree: 'Dr.Sc., Moscow Steklov Institute',
        interests: 'Combinatorial Group Theory',
        office: '916 HE',
        tel: '772-4694',
        email: 'okharlampovich@gmail.com',
        website:'http://math.hunter.cuny.edu/olgak'
    },
    {
        id: 'tkhodorovskiy',
        name: 'Tatyana Khodorovskiy',
        position: 'Lecturer',
        degree: 'Ph.D, Harvard',
        interests: 'Geometric Topology, Differential Geometry',
        office: '905 HE',
        tel: '772-5308',
        email: 'tk20@hunter.cuny.edu',
        website:''
    },
    {
        id: 'vmartinez',
        name: 'Vincent R. Martinez',
        position: 'Assistant Professor',
        degree: 'Ph.D, Indiana University',
        interests: 'Partial Differential Equations, Dynamical Systems',
        office: '918 HE',
        tel: '772-5791',
        email: 'vrmartinez@hunter.cuny.edu',
        website:'http://math.hunter.cuny.edu/vmartine'
    },
    {
        id: 'cpan',
        name: 'Chun Pan',
        position: 'Associate Professor',
        degree: 'Ph.D, University of South Carolina',
        interests: 'Interval-Censored Data',
        office: '928 HE',
        tel: '396-6040',
        email: 'chunpan2003@hotmail.com',
        website:''
    },
    {
        id: 'msamra',
        name: 'Michael Samra',
        position: 'Lecturer',
        degree: 'M.Phil., CUNY Graduate Center',
        interests: 'Mathematics',
        office: '943 HE',
        tel: '772-5476',
        email: 'msamra@hunter.cuny.edu',
        website:''
    },
    {
        id: 'lshneerson',
        name: 'Lev Shneerson',
        position: 'Professor',
        degree: 'Ph.D, Ural State University',
        interests: 'Combinatorial Semigroup Theory',
        office: '903 HE',
        tel: '650-3633',
        email: 'lev.shneerson@hunter.cuny.edu',
        website:''
    },
    {
        id: 'dsylvan',
        name: 'Dana Sylvan',
        position: 'Professor',
        degree: 'Ph.D, EFPL',
        interests: 'Non-stationary processes, Quantile inference',
        office: '914 HE',
        tel: '772-5748',
        email: 'dana.draghicescu@hunter.cuny.edu',
        website:''
    },
    {
        id: 'rthompson',
        name: 'Robert D. Thompson',
        position: 'Professor',
        degree: 'Ph.D, University of Washington',
        interests: 'Algebraic topology',
        office: '902 HE',
        tel: '650-3831',
        email: 'robert.thompson@hunter.cuny.edu',
        website:'http://math.hunter.cuny.edu/~rthompso'
    },
    {
        id: 'wwilliams',
        name: 'William H. Williams',
        position: 'Professor',
        degree: 'Ph.D, Iowa State University',
        interests: 'Sampling theory, Time series, Econometrics',
        office: 'Office: 904 HE',
        tel: '772-4656',
        email: 'bill.williams@hunter.cuny.edu',
        website:''
    },

    // {
    //     id: '',
    //     name: '',
    //     position: '',
    //     degree: '',
    //     interests: '',
    //     office: '',
    //     tel: '',
    //     email: '',
    //     website:''
    // },
]

export default fullTimeFaculty;