INSERT INTO department (name)
VALUES
  ('Sales'),
  ('Legal'),
  ('Accounting'),
  ('Engineering');

INSERT INTO roles (title, salary, department_id)
VALUES
  ('Sales Manager', 250000.00, 1),
  ('Sales Supervisor', 160000.00, 1),
  ('Salesperson', 80000.00, 1),
  ('Legal Team Head', 250000.00, 2),
  ('Lawyer', 160000.00, 2),
  ('Accounting Manager', 250000.00, 3),
  ('Accountant', 80000.00, 3),
  ('Engineering Manager', 250000.00, 4),
  ('Engineering Superviser', 160000.00, 4),
  ('Engineer', 80000.00, 4);

  INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('James', 'Fraser', 1, NULL),
  ('Jack', 'London', 2, 1),
  ('Robert', 'Bruce', 3, 1),
  ('Peter', 'Greenaway', 3, 1),
  ('Derek', 'Jarman', 3, 1),
  ('Paola', 'Pasolini', 3, 1),
  ('Heather', 'Williams', 4, NULL),
  ('Sandy', 'Powell', 5, 7),
  ('Emil', 'Zola', 5, 7),
  ('Sissy', 'Coalpits', 5, 7),
  ('Antoinette', 'Capet', 5, 7),
  ('Samuel', 'Delany', 5, 7),
  ('Tony', 'Duvert', 6, NULL),
  ('Dennis', 'Cooper', 7, 13),
  ('Monica', 'Bellucci', 7, 13),
  ('Samuel', 'Johnson', 7, 13),
  ('John', 'Dryden', 7, 13),
  ('Alexander', 'Pope', 7, 13),
  ('Lionel', 'Johnson', 8, NULL),
  ('Aubrey', 'Beardsley', 9, 19),
  ('Tulse', 'Luper', 10, 19),
  ('William', 'Morris', 10, 19),
  ('George', 'Shaw', 10, 19),
  ('Arnold', 'Bennett', 10, 19);