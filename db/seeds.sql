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
  ('Ronald', 'Firbank', 1, 1),
  ('Virginia', 'Woolf', 3, 3),
  ('Piers', 'Gaveston', 1, 2),
  ('Charles', 'LeRoi', 2, 1);