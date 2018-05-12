class CreateEmployees < ActiveRecord::Migration[5.1]
  def change
    create_table :employees do |t|
      t.string :name
      t.string :position
      t.string :office
      t.string :extension
      t.datetime :start_date

      t.timestamps
    end
  end
end
