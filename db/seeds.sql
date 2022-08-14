INSERT INTO department
  (name)
VALUES
  ('Sales'),
  ('Engineering'),
  ('Legal'),
  ('Finance');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Rep', 75000.00, 1),
    ('Sales Lead', 125000.00, 1),
    ('Lead Engineer', 250000.00, 2),
    ('Software Engineer', 150000.00, 2),
    ('Lawyer', 150000.00, 3),
    ('Legal Team Lead', 200000.00, 3),
    ('Accountant', 125000.00, 4),
    ('Account Manager', 200000.00, 4);
 

INSERT INTO employee
  (first_name, last_name, role_id, manager_id)
VALUES
  ('Ronald', 'Firbank', 2, NULL),
  ('Bob', 'Builder', 3, NULL),
  ('Dora', 'Explorer', 6, NULL),
  ('Swiper', 'Fox', 5, 3),
  ('Kevin', 'Gates', 1, 1),
  ('Ronald', 'McDonald', 8, NULL),
  ('Peyton', 'Manning', 7, 6),
  ('Virginia', 'Woolf', 4, 2),
  ('Piers', 'Gaveston', 4, 2),
  ('Charles', 'LeRoi', 1, 1);