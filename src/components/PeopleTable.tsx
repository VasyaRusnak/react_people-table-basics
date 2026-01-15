import { Person } from '../types/Person';
import { Link } from 'react-router-dom';

type Props = {
  people: Person[];
  selectedSlug?: string;
};

export const PeopleTable: React.FC<Props> = ({ people, selectedSlug }) => (
  <table
    data-cy="peopleTable"
    className="table is-striped is-hoverable is-narrow is-fullwidth"
  >
    <thead>
    <tr>
      <th>Name</th>
      <th>Sex</th>
      <th>Born</th>
      <th>Died</th>
      <th>Mother</th>
      <th>Father</th>
    </tr>
    </thead>

    <tbody>
    {people.map((person) => {
      const mother = people.find((p) => p.name === person.motherName);
      const father = people.find((p) => p.name === person.fatherName);

      return (
        <tr
          key={person.slug}
          data-cy="person"
          className={person.slug === selectedSlug ? 'has-background-warning' : ''}
        >
          {/* Name */}
          <td>
            <Link
              to={`/people/${person.slug}`}
              className={person.sex === 'f' ? 'has-text-danger' : ''}
            >
              {person.name}
            </Link>
          </td>

          {/* Sex, Born, Died */}
          <td>{person.sex}</td>
          <td>{person.born}</td>
          <td>{person.died}</td>

          {/* Mother */}
          <td>
            {mother ? (
              <Link
                to={`/people/${mother.slug}`}
                className={mother.sex === 'f' ? 'has-text-danger' : ''}
              >
                {mother.name}
              </Link>
            ) : (
              person.motherName || '-'
            )}
          </td>

          {/* Father */}
          <td>
            {father ? (
              <Link
                to={`/people/${father.slug}`}
                className={father.sex === 'f' ? 'has-text-danger' : ''}
              >
                {father.name}
              </Link>
            ) : (
              person.fatherName || '-'
            )}
          </td>
        </tr>
      );
    })}
    </tbody>
  </table>
);
