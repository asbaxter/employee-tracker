INSERT INTO department
  (name)
VALUES
  ('Sales'),
  ('Engineering'),
  ('Legal'),
  ('Finance');

INSERT INTO role
    (title, salary)
VALUES
    ('Sales Rep', 75000.00),
    ('Sales Lead', 125000.00),
    ('Lead Engineer', 250000.00),
    ('Software Engineer', 150000.00),
    ('Lawyer', 150000.00),
    ('Legal Team Lead', 200000.00),
    ('Accountant', 125000.00),
    ('Account Manager', 200000.00);
 

INSERT INTO employee
  (first_name, last_name, role_id, manager_id)
VALUES
  ('Ronald', 'Firbank', 1, 2),
  ('Virginia', 'Woolf', 3, 1),
  ('Piers', 'Gaveston', 1, 1),
  ('Charles', 'LeRoi', 2, 1);