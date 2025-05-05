
import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-5 text-center bg-light">
      <div className="container">
        <h2>Education</h2>
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th>Degree</th>
              <th>Institution</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BS-computer science</td>
              <td>Information Technology University lahore</td>
              <td>2023 -2027</td>
            </tr>
            <tr>
              <td>Matriculation</td>
              <td>Fauji foundation model school</td>
              <td>2020</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Education;
