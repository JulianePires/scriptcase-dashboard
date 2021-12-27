import { FaEdit, FaTrashAlt } from "react-icons/fa";
import styles from "./EditProject.module.scss";
import Edit from "assets/images/edit.png";
import RadioInput from "./RadioInput";
import BrowserTabIconInput from "./BrowserTabIconInput";
import TextEditor from "./TextEditor";

const initialApplications = [
  "menu- Initial Application",
  "search01_2",
  "mindmaps_form",
  "form",
];

const EditProject: React.FC = () => (
  <section className={styles["edit-project-container"]}>
    <section>
      <span className={styles["edit-project-image"]}>
        <img src={Edit} alt="edit" />
        <div>
          <button>
            <FaEdit />
          </button>
          <button>
            <FaTrashAlt />
          </button>
        </div>
      </span>

      <span className={styles["edit-project-info"]}>
        <div className="hstack">
          <b>Project Name: </b>
          <p>Samples</p>
        </div>

        <div className="hstack">
          <b>Project Description: </b>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="project description"
            value="Samples"
          />
        </div>

        <div className="hstack">
          <b>Choose the initial application: </b>
          <select name="initial-application" id="initial-application">
            {initialApplications.map((app, index) => (
              <option key={index} value="app">
                {app}
              </option>
            ))}
          </select>
        </div>

        <div className="hstack">
          <b>Use Index Page</b>
          <RadioInput name="use-index-page" />
        </div>

        <div className="hstack">
          <b>Keep old layout of file upload</b>
          <RadioInput name="keep-old-layout-of-file-upload" />
        </div>

        <div className="hstack">
          <b>Browser tab icon (Favicon)</b>
          <BrowserTabIconInput />
        </div>
      </span>
    </section>
    <section className={styles["edit-project-texteditor-container"]}>
      <TextEditor />
      <div className={styles["edit-project-texteditor-footer"]}>Path: p</div>
    </section>
  </section>
);

export default EditProject;
