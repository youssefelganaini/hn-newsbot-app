export default function Table() {
  return (
    <>
      {/* id INTEGER PRIMARY KEY AUTOINCREMENT, platform_name TEXT NOT NULL,
      platform_id TEXT, platform_rank INT, platform_title text NOT NULL,
      platform_points INT, website_link TEXT NOT NULL, website_title TEXT,
      website_description TEXT, keywords TEXT, interesting_reason TEXT,
      interesting_index INTEGER, first_seen TIMESTAMP NOT NULL DEFAULT
      CURRENT_TIMESTAMP, alerted_at TIMESTAMP, characters TEXT */}

      <div className="card mt-3">
        <div className="card-body">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Platform Name</th>
                <th scope="col">Platform Rank</th>
                <th scope="col">Platform Points</th>
                <th scope="col">Website Link</th>
                <th scope="col">Website Title</th>
                <th scope="col">Keywords</th>
                <th scope="col">Interesting Index</th>
                <th scope="col">First Seen</th>
                <th scope="col">Alerted At</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>TechStream</td>
                <td>1</td>
                <td>2000</td>
                <td>
                  <a href="https://techstream.com">techstream.com</a>
                </td>
                <td>Tech News and Insights</td>
                <td>technology, innovation</td>
                <td>High</td>
                <td>2021-01-05</td>
                <td>2023-12-01</td>
              </tr>
              <tr>
                <td>2</td>
                <td>HealthHub</td>
                <td>2</td>
                <td>1800</td>
                <td>
                  <a href="https://healthhub.com">healthhub.com</a>
                </td>
                <td>Wellness and Fitness</td>
                <td>health, fitness</td>
                <td>Medium</td>
                <td>2020-06-12</td>
                <td>2023-11-25</td>
              </tr>
              <tr>
                <td>3</td>
                <td>EcoWorld</td>
                <td>3</td>
                <td>1650</td>
                <td>
                  <a href="https://ecoworld.com">ecoworld.com</a>
                </td>
                <td>Environmental News</td>
                <td>environment, sustainability</td>
                <td>High</td>
                <td>2019-11-15</td>
                <td>2023-11-20</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
