CREATE TABLE iphone (
    iphone_id serial,
    model varchar(10),
    description varchar(300) NOT NULL,
    color varchar(20)  NOT NULL,
    price varchar(10)  NOT NULL,
    size varchar(10)  NOT NULL,
    CONSTRAINT iphone_pk PRIMARY KEY(iphone_id)
);