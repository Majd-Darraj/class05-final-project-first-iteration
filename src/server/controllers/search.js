import SqlString from "sqlstring";
import db from "../config/db";

/******
  Search EVENTS
******/
export function searchEvents(req, res) {
  // http request query
  const searchQuery = `${req.query.q}`;

  // query insertion (escape injections)
  let inserts = [
    "events",
    "event_name",
    searchQuery,
    "event_type",
    searchQuery,
    "event_city",
    searchQuery,
    "event_agenda",
    searchQuery,
    "event_language",
    searchQuery,
    "contact_person",
    searchQuery
  ];

  // mysql query format
  const searchEvents = SqlString.format(
    "SELECT * FROM ?? where (?? REGEXP ? OR ?? REGEXP ? OR ?? REGEXP ? OR ?? REGEXP ? OR ?? REGEXP ? OR ?? REGEXP ? ) AND active = 1 ",
    inserts
  );

  db.execute(searchEvents, (err, eventsResutls) => {
    if (err) {
      res.status(500).send(err);
      return;
    }

    if (eventsResutls.length === 0) {
      res.status(404).send("Not Found");
      return;
    }

    res.send(eventsResutls);
  });
}

/******
  Search INTERNSHIPS
******/
export function searchInternships(req, res) {
  // http request query
  const searchQuery = `${req.query.q}`;

  // query insertion (escape injections)
  let inserts = [
    "internships",
    "internship_title",
    searchQuery,
    "organisation_name",
    searchQuery,
    "internship_description",
    searchQuery,
    "organisation_description",
    searchQuery,
    "application_requirements",
    searchQuery,
    "location",
    searchQuery,
    "contact_person",
    searchQuery
  ];

  const searchInternships = SqlString.format(
    "SELECT * FROM ?? where (?? REGEXP ? OR ?? REGEXP ? OR ?? REGEXP ? OR ?? REGEXP ? OR ?? REGEXP ? OR ?? REGEXP ? OR ?? REGEXP ? ) AND active = 1 ",
    inserts
  );

  db.execute(searchInternships, (err, internshipsResults) => {
    if (err) {
      res.status(500).send(err);
      return;
    }

    res.send(internshipsResults);
  });
}

/******
  Search MENTORS
******/
export function searchMentors(req, res) {
  // http request query
  const searchQuery = `${req.query.q}`;
  // console.log(req.query.q);
  // query insertion (escape injections)
  let inserts = [
    "mentors",
    "first_name",
    searchQuery,
    "last_name",
    searchQuery,
    "mentor_description",
    searchQuery,
    "languages",
    searchQuery,
    "offering",
    searchQuery,
    "area_location",
    searchQuery,
    "preferred_meeting_place",
    searchQuery
  ];

  // mysql query format
  const searchMentors = SqlString.format(
    "SELECT * FROM ?? where (?? REGEXP ? OR ?? REGEXP ? OR ?? REGEXP ? OR ?? REGEXP ? OR ?? REGEXP ? OR ?? REGEXP ? OR ?? REGEXP ? ) AND active = 1 ",
    inserts
  );

  db.execute(searchMentors, (err, mentorsResults) => {
    console.log(mentorsResults);
    if (err) {
      res.status(500).send(err);
      return;
    }

    res.send(mentorsResults);
  });
}

/******
  Search Networking
******/
export function searchNetworking(req, res) {
  // http request query
  const searchQuery = `${req.query.q}`;

  // query insertion (escape injections)
  let inserts = [
    "networking",
    "organisation_name",
    searchQuery,
    "sector_activity",
    searchQuery,
    "organisation_description",
    searchQuery,
    "organisation_city",
    searchQuery,
    "contact_person",
    searchQuery
  ];

  // mysql query format
  const searchNetworking = SqlString.format(
    "SELECT * FROM ?? where (?? REGEXP ? OR ?? REGEXP ? OR ?? REGEXP ? OR ?? REGEXP ? OR ?? REGEXP ? ) AND active = 1 ",
    inserts
  );

  db.execute(searchNetworking, (err, networkingResults) => {
    // console.log(networkingResults);
    if (err) {
      res.status(500).send(err);
      return;
    }

    res.send(networkingResults);
  });
}
