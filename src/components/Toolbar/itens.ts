import ApplicationLanguage from "assets/icons/application_language.svg";
import BatchApplications from "assets/icons/batch_applications.svg";
import CloseProject from "assets/icons/close_project.svg";
import DataDictionary from "assets/icons/data_dictionary.svg";
import DeployApplications from "assets/icons/deploy_applications.svg";
import EditConnection from "assets/icons/edit_connection.svg";
import GenerateSource from "assets/icons/generate_source.svg";
import Help from "assets/icons/help.svg";
import Home from "assets/icons/home.svg";
import NewApplication from "assets/icons/new_application.svg";
import NewConnection from "assets/icons/new_connection.svg";
import NewProject from "assets/icons/new_project.svg";
import OpenProject from "assets/icons/open_project.svg";
import RunApplication from "assets/icons/run_application.svg";
import RunProject from "assets/icons/run_project.svg";
import SaveApplication from "assets/icons/save_application.svg";
import SqlBuilder from "assets/icons/sql_builder.svg";

import { ToolbarItemType } from "types";


export const toolbarItens: ToolbarItemType[] = [{
    image: Home,
    title: "Home",
    haveDivider: true
}, {
    image: NewProject,
    title: "New Project",
}, {
    image: OpenProject,
    title: "Open Project",
}, {
    image: CloseProject,
    title: "Close Project",
}, {
    image: RunProject,
    title: "Run Project",
    haveDivider: true
}, {
    image: NewConnection,
    title: "New Connection",
}, {
    image: EditConnection,
    title: "Edit Connection",
}, {
    image: SqlBuilder,
    title: "SQL Builder",
    haveDivider: true
}, {
    image: NewApplication,
    title: "New Application",
}, {
    image: BatchApplications,
    title: "Batch Applications",
    haveDivider: true
}, {
    image: SaveApplication,
    title: "Save Application",
}, {
    image: GenerateSource,
    title: "Generate Source",
}, {
    image: RunApplication,
    title: "Run Application",
}, {
    image: DeployApplications,
    title: "Deploy Applications",
    haveDivider: true
}, {
    image: DataDictionary,
    title: "Data Dictionary",
}, {
    image: ApplicationLanguage,
    title: "Application Language",
    haveDivider: true
}, {
    image: Help,
    title: "Help",
}]