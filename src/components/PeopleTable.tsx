import { Person } from '../types/Person';
import { PersonLink } from "../PersonLink";

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
    {people.map((person) => (
      <tr
        key={person.slug}
        data-cy="person"
        className={person.slug === selectedSlug ? 'has-background-warning' : ''}
      >
        {/* Person */}
        <td><PersonLink person={person} /></td>
        <td>{person.sex}</td>
        <td>{person.born}</td>
        <td>{person.died}</td>

        {/* Mother */}
        <td>
          {people.find(p => p.name === person.motherName) ? (
            <PersonLink person={people.find(p => p.name === person.motherName)!} />
          ) : person.motherName ? (
            <span className={person.motherSex === 'f' ? 'has-text-danger' : ''}>
                {person.motherName}
              </span>
          ) : (
            '-'
          )}
        </td>

        {/* Father */}
        <td>
          {people.find(p => p.name === person.fatherName) ? (
            <PersonLink person={people.find(p => p.name === person.fatherName)!} />
          ) : person.fatherName ? (
            <span className={person.fatherSex === 'f' ? 'has-text-danger' : ''}>
                {person.fatherName}
              </span>
          ) : (
            '-'
          )}
        </td>
      </tr>
    ))}
    </tbody>
  </table>
);
