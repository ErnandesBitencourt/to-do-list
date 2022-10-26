-- Active: 1661639142408@@35.226.146.116@3306@gebru-4211795-ernandes-bitencourt
CREATE TABLE IF NOT EXISTS Create_to_do_list (
    id VARCHAR(255) PRIMARY KEY,
    taks VARCHAR(255) NOT NULL
);

ALTER TABLE Create_to_do_list
    ADD completed BOOLEAN;

    ALTER TABLE Create_to_do_list 
    DROP completed 

