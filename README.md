# Product Campaign Manager

This project enables sellers to create, edit, or delete separate campaigns for each of their products they want to sell. Each campaign includes the following attributes:

-   **Campaign Name:** Mandatory
-   **Keywords:** Mandatory, pre-populated with typeahead
-   **Bid Amount:** Mandatory, with a minimum amount
-   **Campaign Fund:** Mandatory, deducted from their Emerald account funds, with a new balance updated on screen
-   **Status:** On or off - mandatory
-   **Town:** Can pick from a pre-populated dropdown list of towns
-   **Radius:** Mandatory in kilometers

## Backend (Django) Setup

### Clone the Repository

git clone <repository-url>

### Navigate to the Backend Directory

cd backend

### Install Requirements

pip install -r requirements.txt

### Run Migrations

python manage.py makemigrations
python manage.py migrate

### Run the Server

python manage.py runserver

## Frontend (Angular) Setup

### Navigate to the Frontend Directory

cd frontend

### Install Dependencies using Yarn

yarn install

### Serve the Application

ng serve
