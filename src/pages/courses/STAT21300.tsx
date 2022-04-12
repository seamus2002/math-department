import React from 'react';

const Course = (props: any) => {
  return (
    <div>
      <h1>STAT 213000: Introduction to Applied Statistics</h1>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 description">
            <h5>Description</h5>
            <p>Sampling, estimation, tests of hypotheses, including one- and two-sample t-tests, two- and three-way tables for nominal and ordinal data, linear regression, analysis of variance through two-way with interaction, appropriate statistical software.</p>
          </div>
          <div className="col-lg-6 description">
            <h5>Prerequisites</h5>
            <p>Any of:</p>
            <ul>
              <li>MATH 12400</li>
              <li>MATH 12500</li>
              <li>MATH 12550</li>
              <li>approprate score on Hunter Math Placement Exam</li>
            </ul>
          </div>
          <div className="col-lg-6 description">
            <h5>Required for</h5>
            <ul>
              <li>Mathematics Majors</li>
              <li>Statistics Majors</li>
              <li>Computer Science Majors</li>
            </ul>
          </div>
          <div className="col-lg-6 description">
            <h5>Required Core</h5>
            <p>Mathematical & Quantitative Reasoning</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;