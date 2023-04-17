export const typeDefs = /* GraphQL */ `
  type Person {
    """
    The name of this person
    """
    name: String

    """
    The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.
    """
    birthYear: String

    """
    The eye color of this person. Will be "unknown" if not known or "n/a" if the person does not have an eye.
    """
    eyeColor: String

    """
    The hair color of this person. Will be "unknown" if not known or "n/a" if the person does not have hair.
    """
    hairColor: String

    """
    The height of the person in centimeters.
    """
    height: String

    """
    The URL of a planet resource, a planet that this person was born on or inhabits.
    """
    homeworld: String

    """
    the ISO 8601 date format of the time that this resource was created.
    """
    created: String

    """
    the ISO 8601 date format of the time that this resource was edited.
    """
    edited: String
  }

  type Query {
    getRandomPerson: Person
  }
`;
