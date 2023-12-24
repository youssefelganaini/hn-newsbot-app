export default function Table() {
  //   function getTableEntries(table_entries) {
  //     let result = [];
  //     for (const element in table_entries) {
  //       result.push(returnTableElement(element));
  //     }
  //   }

  //   function returnTableElement(element) {
  //     return (
  //       <tr>
  //         <td>{element[0]}</td>
  //         <td>{element[1]}</td>
  //         <td>{element[2]}</td>
  //       </tr>
  //     );

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
              <h5>Articles</h5>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Platform Name</th>
                <th scope="col">Platform Points</th>
                <th scope="col">Website Link</th>
                <th scope="col">Website Title</th>
                <th scope="col">Keywords</th>
                <th scope="col">Interesting Index</th>
                <th scope="col">Alerted At</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
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
              </tr>
              <tr>
                <td>4</td>
                <td>FinanSmart</td>
                <td>4</td>
                <td>1500</td>
                <td>
                  <a href="https://finansmart.com">finansmart.com</a>
                </td>
                <td>Finance and Economy</td>
                <td>finance, economy, investing</td>
                <td>Medium</td>
              </tr>
              <tr>
                <td>5</td>
                <td>AutoInnovate</td>
                <td>5</td>
                <td>1400</td>
                <td>
                  <a href="https://autoinnovate.com">autoinnovate.com</a>
                </td>
                <td>Automotive News</td>
                <td>automotive, technology</td>
                <td>Medium</td>
              </tr>
              <tr>
                <td>6</td>
                <td>GlobalTastes</td>
                <td>6</td>
                <td>1300</td>
                <td>
                  <a href="https://globaltastes.com">globaltastes.com</a>
                </td>
                <td>World Cuisine and Recipes</td>
                <td>food, cooking, recipes</td>
                <td>Low</td>
              </tr>
              <tr>
                <td>7</td>
                <td>StyleSphere</td>
                <td>7</td>
                <td>1200</td>
                <td>
                  <a href="https://stylesphere.com">stylesphere.com</a>
                </td>
                <td>Fashion Trends and Tips</td>
                <td>fashion, style, trends</td>
                <td>High</td>
              </tr>
              <tr>
                <td>8</td>
                <td>TravelQuest</td>
                <td>8</td>
                <td>1100</td>
                <td>
                  <a href="https://travelquest.com">travelquest.com</a>
                </td>
                <td>Travel Guides and Stories</td>
                <td>travel, adventure, guides</td>
                <td>Medium</td>
              </tr>
              <tr>
                <td>9</td>
                <td>GameFrontier</td>
                <td>9</td>
                <td>1000</td>
                <td>
                  <a href="https://gamefrontier.com">gamefrontier.com</a>
                </td>
                <td>Gaming News and Reviews</td>
                <td>gaming, reviews, news</td>
                <td>Low</td>
              </tr>
              <tr>
                <td>10</td>
                <td>ArtInspire</td>
                <td>10</td>
                <td>900</td>
                <td>
                  <a href="https://artinspire.com">artinspire.com</a>
                </td>
                <td>Art and Design</td>
                <td>art, design, creativity</td>
                <td>High</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
